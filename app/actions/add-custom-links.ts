'use server';

import { db } from '../lib/firebase';

export interface Link {
  title: string;
  url: string;
}

interface AddCustomLinksProps {
  links: Link[];
  profileId: string;
}

export default async function addCustomLinks({
  links,
  profileId,
}: AddCustomLinksProps) {
  try {
    await db.collection('profiles').doc(profileId).update({
      link1: links[0],
      link2: links[1],
      link3: links[2],
    });
  } catch (error) {
    console.error(error);
  }
}
