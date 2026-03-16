import { UsersListView } from "@/views/layout/dashboard/users/users-list.view"
import { mockUsers } from "@/lib/dashboard/constants"

export default function UsersPage() {
  return <UsersListView users={mockUsers} />
}
