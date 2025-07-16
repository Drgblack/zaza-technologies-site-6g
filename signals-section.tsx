"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Heart, Share2, Plus } from "lucide-react"
import Layout from "@/components/layout"

interface Quote {
  id: number
  text: string
  attribution: string
  tag: string
  likes: number
  isLiked: boolean
}

const initialQuotes: Quote[] = [
  {
    id: 1,
    text: "Burnout in teaching comes from putting in a huge effort to get your students to be successful when some students actively resist learning.",
    attribution: "High School Teacher, USA",
    tag: "Burnout",
    likes: 24,
    isLiked: false,
  },
  {
    id: 2,
    text: "By the time I've built a beautiful Nearpod lesson, I'm too exhausted to teach it.",
    attribution: "Middle School Teacher, UK",
    tag: "Planning",
    likes: 18,
    isLiked: false,
  },
  {
    id: 3,
    text: "I know how to teach inference… but thinking about how to teach someone to infer completely confuses me.",
    attribution: "Anonymous (Reddit)",
    tag: "Cognitive Load",
    likes: 31,
    isLiked: false,
  },
]

const tags = ["All", "Burnout", "Planning", "Inclusion", "Feedback", "Joy", "Other"]
const formTags = ["Burnout", "Planning", "Inclusion", "Feedback", "Joy", "Other"]

export default function SignalsSection() {
  const [quotes, setQuotes] = useState<Quote[]>(initialQuotes)
  const [activeFilter, setActiveFilter] = useState("All")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({
    quote: "",
    name: "",
    location: "",
    tag: "",
    canFeature: false,
    email: "",
  })

  const filteredQuotes = activeFilter === "All" ? quotes : quotes.filter((quote) => quote.tag === activeFilter)

  const handleLike = (id: number) => {
    setQuotes(
      quotes.map((quote) =>
        quote.id === id
          ? { ...quote, likes: quote.isLiked ? quote.likes - 1 : quote.likes + 1, isLiked: !quote.isLiked }
          : quote,
      ),
    )
  }

  const handleShare = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.attribution}`)
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy quote:", err)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    setIsModalOpen(false)
    // Reset form
    setFormData({
      quote: "",
      name: "",
      location: "",
      tag: "",
      canFeature: false,
      email: "",
    })
  }

  const getTagColor = (tag: string) => {
    const colors: { [key: string]: string } = {
      Burnout: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-red-200 dark:border-red-700",
      Planning: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700",
      Inclusion:
        "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700",
      Feedback:
        "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 border-purple-200 dark:border-purple-700",
      Joy: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
      "Cognitive Load":
        "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 border-orange-200 dark:border-orange-700",
      Other: "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-600",
    }
    return colors[tag] || colors["Other"]
  }

  return (
    <Layout currentPage="signals">
      <section className="py-16 px-4 bg-gradient-to-b from-amber-50/30 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <img src="/zaza-logo.png" alt="Zaza Logo" className="w-16 h-16 md:w-20 md:h-20" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Real words. Real challenges. Real teachers.
            </h1>

            <div className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                We believe the best EdTech doesn't start with an idea: it starts with listening.
              </h2>
              <p>So before we built Zaza, we listened.</p>
              <p>To teachers.</p>
              <p>To mentors.</p>
              <p>To anonymous voices late at night on Reddit.</p>
              <p className="pt-4">
                This wall is a growing collection of signals from the classroom: powerful, personal quotes shared by
                real educators about the work, the weight, and the wonder of teaching today.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mb-12 p-8 bg-white/60 dark:bg-gray-800/60 rounded-2xl border border-amber-100 dark:border-gray-600 backdrop-blur-sm">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">Have something to add?</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Share a quote, thought, or challenge from your teaching experience: anonymously or with credit. We feature
              selected insights here (with permission), and offer early access and bonuses to contributors.
            </p>

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button className="bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200">
                  <Plus className="w-5 h-5 mr-2" />
                  Share your signal
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
                    Share Your Signal
                  </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                  <div>
                    <Label htmlFor="quote" className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Your Quote *
                    </Label>
                    <Textarea
                      id="quote"
                      required
                      value={formData.quote}
                      onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                      placeholder="Share your experience, challenge, or insight from the classroom..."
                      className="mt-2 min-h-[120px] resize-none bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Name or Anonymous?
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name or leave blank for anonymous"
                      className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location" className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Optional: School or Location
                    </Label>
                    <Input
                      id="location"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g., Elementary School, Chicago or Middle School, UK"
                      className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <div>
                    <Label className="text-base font-medium mb-3 block text-gray-700 dark:text-gray-300">
                      Topic tag
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {formTags.map((tag) => (
                        <Button
                          key={tag}
                          type="button"
                          variant={formData.tag === tag ? "default" : "outline"}
                          onClick={() => setFormData({ ...formData, tag: tag })}
                          className={`rounded-full ${formData.tag === tag ? "bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600" : "hover:bg-amber-50 dark:hover:bg-amber-900/20 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300"}`}
                        >
                          {tag}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Switch
                      id="canFeature"
                      checked={formData.canFeature}
                      onCheckedChange={(checked) => setFormData({ ...formData, canFeature: checked })}
                    />
                    <Label htmlFor="canFeature" className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Can we feature this publicly?
                    </Label>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-medium text-gray-700 dark:text-gray-300">
                      Email for bonus access (optional)
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="mt-2 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white py-3 text-lg font-medium rounded-full"
                  >
                    Submit
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={activeFilter === tag ? "default" : "outline"}
                onClick={() => setActiveFilter(tag)}
                className={`rounded-full transition-all duration-200 ${
                  activeFilter === tag
                    ? "bg-amber-600 hover:bg-amber-700 dark:bg-amber-500 dark:hover:bg-amber-600 text-white shadow-md"
                    : "hover:bg-amber-50 dark:hover:bg-amber-900/20 border-amber-200 dark:border-amber-700 text-gray-700 dark:text-gray-300"
                }`}
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Quote Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredQuotes.map((quote) => (
              <Card
                key={quote.id}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm animate-in fade-in-50 duration-500"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTagColor(quote.tag)}`}>
                      {quote.tag}
                    </span>
                  </div>

                  <blockquote className="text-gray-800 dark:text-gray-200 text-base leading-relaxed mb-4 font-medium">
                    "{quote.text}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <cite className="text-sm text-gray-600 dark:text-gray-400 not-italic">- {quote.attribution}</cite>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleLike(quote.id)}
                        className={`p-2 hover:bg-red-50 dark:hover:bg-red-900/20 ${quote.isLiked ? "text-red-600 dark:text-red-400" : "text-gray-400 dark:text-gray-500"}`}
                      >
                        <Heart className={`w-4 h-4 ${quote.isLiked ? "fill-current" : ""}`} />
                        <span className="ml-1 text-sm">{quote.likes}</span>
                      </Button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleShare(quote)}
                        className="p-2 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredQuotes.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">No quotes found for this filter.</p>
            </div>
          )}

          {/* Footer */}
          <footer className="text-center mt-16 pt-8 border-t border-amber-100 dark:border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src="/zaza-logo.png" alt="Zaza Logo" className="w-8 h-8" />
              <span className="font-semibold text-lg text-gray-700 dark:text-gray-300">Zaza</span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">EdTech that listens first.</p>
          </footer>
        </div>
      </section>
    </Layout>
  )
}
