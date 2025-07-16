import type React from "react"
import Header from "./header"
import SharedFooter from "./shared-footer"

interface LayoutProps {
  children: React.ReactNode
  currentPage?: string
}

export default function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Shared Footer */}
      <SharedFooter currentPage={currentPage} />
    </div>
  )
}
