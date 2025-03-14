import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { authServerAxios, githubApiAxios, googleApiAxios } from '../../lib/axios.lib';
import { useLocation } from 'react-router-dom';

export const GithubProfile = () => {
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const githubAccessToken = Cookies.get('access_token') || '';

  useEffect(() => {
    (async () => {
      if (githubAccessToken && location.pathname.includes('v1')) {
        const response = await githubApiAxios.get('/user', {
          headers: {
            Authorization: `Bearer ${githubAccessToken}`,
          },
        });

        setUserData(() => response.data);
      } else if (location.pathname.includes('v2')) {
        try {
          const response = await authServerAxios.get('/user/profile/github');

          setUserData(() => response.data.user);
        } catch (error) {
          if (error.status === 403 || error.status === 500) {
            window.location.href = '/';
          }
        }
      } else {
        window.location.href = '/';
      }
    })();
  }, [githubAccessToken, location.pathname]);

  return (
    <div className='w-full min-h-screen flex flex-col items-center p-12 gap-4 text-neutral-200 bg-neutral-900'>
      {userData ? (
        <>
          <div className='flex flex-col md:flex-row gap-6'>
            <img
              src={userData?.avatar_url}
              alt={userData?.name || 'user avatar'}
              className='rounded-full w-[120px] h-[120px]'
            />
            <div className='flex flex-col justify-center'>
              <p className='text-xl font-bold mb-4'>
                {userData?.name || userData?.login}
                <a
                  target='_blank'
                  href={userData?.html_url}
                  className='font-light ml-4 text-sm  text-neutral-100 bg-neutral-600/50 px-4 rounded-md py-2'
                >
                  Visit profile
                </a>
              </p>
              <p className='mt-[-1.2rem] max-w-[350px] text-sm  text-neutral-400'>
                {userData?.login}
              </p>
              <p className='mt-2 max-w-[350px]'>{userData?.bio}</p>
            </div>
          </div>
          <div className='mt-12 grid grid-cols-2 gap-[4rem] md:flex md:gap-4'>
            <div className='flex items-center flex-col'>
              <p className='text-5xl'>{userData?.followers}</p>
              <p className='text-xl '>Followers</p>
            </div>
            <div className='hidden md:block mx-4 min-h-full border border-transparent border-l-neutral-300'></div>
            <div className='flex items-center flex-col'>
              <p className='text-5xl'>{userData?.following}</p>
              <p className='text-xl '>Following</p>
            </div>
            <div className='hidden md:block mx-4 min-h-full border border-transparent border-l-neutral-300'></div>
            <div className='flex items-center flex-col'>
              <p className='text-5xl'>{userData?.public_repos}</p>
              <p className='text-xl '>Public repos</p>
            </div>
            <div className='hidden md:block mx-4 min-h-full border border-transparent border-l-neutral-300'></div>
            <div className='flex items-center flex-col'>
              <p className='text-5xl'>{userData?.total_private_repos}</p>
              <p className='text-xl '>Private repos</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='text-3xl'>Loading your Github profile....</div>
        </>
      )}
    </div>
  );
};

export const GoogleProfile = () => {
  const [userData, setUserData] = useState(null);
  const googleAccessToken = Cookies.get('access_token') || '';

  useEffect(() => {
    (async () => {
      if (googleAccessToken) {
        try {
          // Retrieve user info
          const userResponse = await googleApiAxios.get('/userinfo', {
            headers: {
              Authorization: `Bearer ${googleAccessToken}`,
            },
          });

          setUserData(() => userResponse.data);
        } catch (error) {
          window.location.href = '/';
          console.error(error);
          console.log(JSON.stringify(error, undefined, 2));
        }
      } else if (location.pathname.includes('v2')) {
        try {
          const response = await authServerAxios.get('/user/profile/google');

          setUserData(() => response.data.user);
        } catch (error) {
          if (error.status === 403 || error.status === 500) {
            window.location.href = '/';
          }
        }
      } else {
        window.location.href = '/';
      }
    })();
  }, []);

  return (
    <div className='w-full min-h-screen flex flex-col items-center p-12 gap-4 text-neutral-200 bg-neutral-900'>
      <div className='mt-4 flex flex-col gap-6 items-center'>
        <div className='bg-neutral-700 h-max w-max p-6 rounded-full'>
          <svg
            className='fill-neutral-900 stroke-neutral-900'
            strokeWidth='0'
            viewBox='0 0 488 512'
            height='6rem'
            width='6rem'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
          </svg>
        </div>
        <div className='flex flex-col justify-center'>
          <p className='text-xl mb-4 text-center'>
            Hello {userData?.name || userData?.email} you&apos;ve
            <br /> logged in with <span className='italic text-neutral-400'>{userData?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
