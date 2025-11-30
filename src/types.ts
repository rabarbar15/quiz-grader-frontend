export interface StudentResponse {
  answer: string;
  feedback: string;
}

export interface StudentData {
  responses: {
    [question: string]: StudentResponse;
  };
}

export interface FeedbackRequest {
  quizId: number
  studentData: StudentData
  language: string
}

export interface TestViewAnswer {
  questionId: number
  question: string
  studentAnswer: string
  correctAnswer: string
  pointsAwarded: number
  maxPoints: number
  feedback: string
}

export interface TestViewStudent {
  id: number
  name: string
  className: string
  score: number
  maxScore: number
  answers: TestViewAnswer[]
}

export interface Test {
  id: number
  subject: string
  students?: TestViewStudent[]
}