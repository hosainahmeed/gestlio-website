import { LockedIcon, Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function LoginScreen() {
  const t = useTranslations();
  return (
    <div className="flex h-screen w-full">
      <div className="w-full flex flex-col items-center justify-center">

        <form className="md:w-96 w-80 flex flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2 text-center">
            <Image src="/brand-logo.svg" alt="Logo" width={128} height={128} />
            <h2 className="text-4xl text-gray-900 font-medium">{t('LoginScreen.welcome')}</h2>
            <p className="text-sm text-gray-500/90">{t('LoginScreen.description')}</p>
          </div>


          <div className="flex items-center w-full mt-6 bg-transparent border border-gray-300/60 h-12 rounded-lg overflow-hidden pl-2 gap-2">
            <HugeiconsIcon icon={Mail01Icon} className="text-gray-500/80" />
            <input type="email" placeholder="Email id" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
          </div>

          <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-lg overflow-hidden pl-2 gap-2">
            <HugeiconsIcon icon={LockedIcon} className="text-gray-500/80" />
            <input type="password" placeholder="Password" className="bg-transparent text-gray-500/80 placeholder-gray-500/80 outline-none text-sm w-full h-full" required />
          </div>

          <div className="w-full flex items-center justify-between mt-8 text-gray-500/80">
            <div className="flex items-center gap-2">
              <input className="h-5" type="checkbox" id="checkbox" />
              <label className="text-sm" htmlFor="checkbox">Remember me</label>
            </div>
            <a className="text-sm underline" href="#">Forgot password?</a>
          </div>

          <button type="submit" className="mt-8 w-full h-11 rounded-lg text-white bg-[#2DBEFF] hover:opacity-90 transition-opacity">
            Login
          </button>
          <p className="text-gray-500/90 text-sm mt-4">Don’t have an account? <a className="text-indigo-400 hover:underline" href="#">Sign up</a></p>
        </form>
      </div>
    </div>
  );
};