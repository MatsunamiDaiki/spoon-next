import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { LogoutIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'
import { useQueryClient } from '@tanstack/react-query'

const TaskDetail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const queryClient = useQueryClient()

  return (
    <Layout title="Task Detail">
      <LogoutIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
        onClick={() => {
          router.push('dashboard')
        }}
      />
    </Layout>
  )
}

export default TaskDetail