import { formatUrl } from '@/app/lib/utils';
import { ProfileData } from '@/app/server/get-profile-data';
import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../../ui/button';
import AddCustomLink from './add-custom-link';
import EditSocialLinks from './edit-social-links';

interface UserCardProps {
  profileData: ProfileData;
}

export const UserCard = ({ profileData }: UserCardProps) => {
  // const icons = [Github, Instagram, Linkedin, Twitter];

  const socialMedias = profileData?.socialMedias;

  const icons = [
    {
      Icon: Github,
      url: socialMedias?.github,
    },
    {
      Icon: Instagram,
      url: socialMedias?.instagram,
    },
    {
      Icon: Linkedin,
      url: socialMedias?.linkedin,
    },
    {
      Icon: Twitter,
      url: socialMedias?.twitter,
    },
  ];

  const link1 = profileData?.link1;
  const link2 = profileData?.link2;
  const link3 = profileData?.link3;

  const links = [
    {
      title: link1?.title,
      url: link1?.url,
    },
    {
      title: link2?.title,
      url: link2?.url,
    },
    {
      title: link3?.title,
      url: link3?.url,
    },
  ];

  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img
          src="https://github.com/lucasgomesmatos.png"
          alt="Lucas Gomes Matos"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            Lucas Dev
          </h3>
        </div>
        <p className="opacity-40">Eu faço produtos para a Internet.</p>
      </div>
      <div className="flex flex-col gap-2 w-full">
        <span className="uppercase text-xs font-medium">Links</span>
        <div className="flex gap-3">
          {icons.map(({ Icon, url }, index) => (
            <Link
              key={`${index}-${url}`}
              href={url || '#'}
              target={url ? '_blank' : '_self'}
              className="p-3 rounded-xl bg-[#1E1E1E] hover:bg-[#2E2E2E]"
            >
              <Icon />
            </Link>
          ))}
          <EditSocialLinks socialMedias={socialMedias} />
        </div>
      </div>
      {Boolean(links) && (
        <div className="flex flex-col gap-3 w-full h-[172px]">
          <div className="w-full flex flex-col items-center gap-3">
            {links
              .filter((link) => link.title && link.url)
              .map((link, index) => (
                <Link
                  key={`${index}-${link.url}`}
                  href={formatUrl(link.url || '')}
                  target="_blank"
                  className="w-full"
                >
                  <Button className="w-full">{link.title}</Button>
                </Link>
              ))}
          </div>
        </div>
      )}

      <AddCustomLink />
    </div>
  );
};
