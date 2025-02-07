import 'server-only'

import { db } from '../lib/firebase'

export interface ProjectData {
  id: string
  userId: string
  projectName: string
  projectDescription: string
  projectUrl: string
  imagePath: string
  createdAt: number
  totalVisits?: number
}

export async function getProjectsData(profileId: string) {
 const snapshot =  await db.collection('projects').doc(profileId).collection('projects').get()

   return snapshot.docs.map(doc => doc.data()) as ProjectData[]
}