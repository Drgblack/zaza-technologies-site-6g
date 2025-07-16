"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ThemeToggle from "./theme-toggle"

export default function Header() {
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [learningOpen, setLearningOpen] = useState(false)

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <img src="/zaza-logo.png" alt="Zaza Technologies" className="h-8 w-8" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Zaza</span>
            </a>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Our Solutions Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200 flex items-center"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                Our Solutions
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Solutions Dropdown Menu */}
              {solutionsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-2 z-50 transition-colors duration-200"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <a
                    href="/zaza-promptly"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Zaza Promptly
                  </a>
                  <a
                    href="/zaza-teach"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Zaza Teach
                  </a>
                  <a
                    href="/zaza-study"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza Study
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <a
                    href="/zaza-visuals"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza Visuals
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <a
                    href="/zaza-coach"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza Coach
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <a
                    href="/zaza-claritydeck"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza ClarityDeck
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <a
                    href="/zaza-schwoop"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza Schwoop
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <a
                    href="/zaza-hr-spark"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    title="Landing page in development"
                  >
                    Zaza HR Spark
                    <span className="bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-full ml-2">
                      Coming Soon
                    </span>
                  </a>
                  <div className="border-t border-gray-100 dark:border-gray-600 mt-2 pt-2">
                    <a
                      href="/products"
                      className="block px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                    >
                      See All Products
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Learning Centre Dropdown */}
            <div className="relative group">
              <button
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200 flex items-center"
                onMouseEnter={() => setLearningOpen(true)}
                onMouseLeave={() => setLearningOpen(false)}
              >
                Learning Centre
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Learning Centre Dropdown Menu */}
              {learningOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 py-2 z-50 transition-colors duration-200"
                  onMouseEnter={() => setLearningOpen(true)}
                  onMouseLeave={() => setLearningOpen(false)}
                >
                  <a
                    href="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="/resources"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Free Resources
                  </a>
                  <a
                    href="/faq"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    FAQs
                  </a>
                  <a
                    href="/privacy"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Privacy & Data Policy
                  </a>
                </div>
              )}
            </div>

            <a
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200"
            >
              About Us
            </a>

            <a
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200"
            >
              Contact
            </a>

            <a
              href="/vision-mission"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm transition-colors duration-200"
            >
              Vision & Mission
            </a>
          </nav>

          {/* Right-aligned CTA Buttons and Theme Toggle */}
          <div className="flex items-center space-x-3">
            <ThemeToggle />

            <Button
              className="hidden sm:inline-flex bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium shadow-sm"
              asChild
            >
              <a href="/zaza-teach">Try Zaza Teach</a>
            </Button>

            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium shadow-sm"
              asChild
            >
              <a href="/zaza-promptly">Try Zaza Promptly</a>
            </Button>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
