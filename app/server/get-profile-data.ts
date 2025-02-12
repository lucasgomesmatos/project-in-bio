import 'server-only'

import { db } from '../lib/firebase'

export interface SocialMedias {
  github: string
  linkedin: string
  twitter: string
  instagram: string
}

export interface ProfileData {
  userId: string
  totalVisits: number
  createAt: number
  socialMedias: SocialMedias
  updatedAt?: number
}

export async function getProfileData(profileId: string): Promise<ProfileData> {
  const snapshot = await db.collection('profiles').doc(profileId).get()

  return snapshot.data() as ProfileData
}
