import 'server-only'

import { db } from '../lib/firebase'

interface ProfileData {
  userId: string
  totalVisits: number
  createAt: number
}

export async function getProfileData(profileId: string): Promise<ProfileData> {
  const snapshot = await db.collection('profiles').doc(profileId).get()

  return snapshot.data() as ProfileData
}
