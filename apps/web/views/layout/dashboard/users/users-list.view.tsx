"use client"

import { DataTable } from "@/views/layout/dashboard/components/data-table"
import { getUserColumns } from "@/views/layout/dashboard/users/components/user-table-columns"
import { UserCard } from "./user-card.view"

interface User {
  id: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

interface UsersListViewProps {
  users: readonly User[]
}

export function UsersListView({ users }: UsersListViewProps) {
  const columns = getUserColumns()

  return (
    <div className="space-y-4">
      <div className="hidden md:block">
        <DataTable data={[...users]} columns={columns} />
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  )
}
