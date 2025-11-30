import { Text } from '@radix-ui/themes'
import { StarIcon } from '@heroicons/react/16/solid'
import type { FeedbackRequest } from '../../types'
import { useQuery } from '@tanstack/react-query'
import { getFeedbackById } from '../../api/feedbackService'

const FeedbackAi = (feedbackRequest : FeedbackRequest) => {
    const {data: feedback} = useQuery({
        queryFn: () => getFeedbackById(feedbackRequest),
        queryKey: ['feedback']
    })
  return (
        <div className="rounded-lg shadow-lg bg-white p-4 w-full my-2">
            <div className='flex gap-1 p-2'>
                <StarIcon className='w-7 text-primary' />
                <Text size='5' className='font-bold'>Feedback dla ucznia</Text>
            </div>
            <div className='flex flex-col gap-4 bg-gray-50 px-4 py-8 my-2 mx-2 rounded-md border-1 border-gray-200'>
                <Text size='4' weight='bold' className='text-secondary'>Ogólna ocena:</Text>
                {/* <Text className='font-medium'>{feedbackText[0]}</Text> */}
                <Text size='4' weight='bold' className='text-secondary'>Mocne strony:</Text>
                {/* <Text className='font-medium'>{feedbackText[1]}</Text> */}
                <Text size='4' weight='bold' className='text-secondary'>Obszary do poprawy:</Text>
                {/* <Text className='font-medium'>{feedbackText[2]}</Text> */}
                <Text size='4' weight='bold' className='text-secondary'>Rekomendacje:</Text>
                {/* <Text className='font-medium'>{feedbackText[3]}</Text> */}
            </div>
            {feedback}
        </div>
  )
}

export default FeedbackAi