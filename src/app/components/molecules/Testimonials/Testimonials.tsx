"use client"

import React, { useEffect, useState } from "react"
import { InfiniteMovingCards } from "../../ui/InfinityMovingCards"
import LazyShow from "../LazyShow/LazyShow"
import SectionHeading from "../../atoms/SectionHeading/SectionHeading"
import Container from "../../atoms/Container/Container"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I am grateful for the opportunities, lessons, support, and memories from the school. Despite past challenges like flooding and inadequate facilities, the school taught us valuable life lessons. With significant improvements now, I thank the TFN teachers and the Shree Bhotenamlang School team for their dedication and contributions.",
      name: "Himal Tamang",
      title: "2074 /  2017",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote:
        "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ]

  return (
    <div className="mb-14 bg-green-50 w-full">
      <Container classNames="text-black text-center py-4">
        <div className="mb-8">
          <LazyShow>
            <SectionHeading>Testimonials</SectionHeading>
          </LazyShow>
          <LazyShow>
            These are some of the words from our passed our students about our
            school.
          </LazyShow>
        </div>
      </Container>
      <div className="w-full rounded-md flex  flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  )
}
