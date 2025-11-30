// src/services/feedbackService.ts
import type { FeedbackRequest } from '../types'
import { api } from './apiClient'

export async function getFeedbackById({ quizId, studentData, language }: FeedbackRequest): Promise<string> {
//   const res = await api.post(`/generate-feedback`, { quizId, studentData, language })
//   console.log(res.data);

//   return res.data;
return 'hello'
}
