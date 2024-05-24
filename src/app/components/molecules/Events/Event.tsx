import React from "react"
import Container from "../../atoms/Container/Container"

const Event = () => {
  return (
    <Container classNames="relative text-black" id="events">
      <header className="py-6 ">
        <h1 className="text-3xl font-bold ">
          Shree Bhotenamlang Secondary School
        </h1>
      </header>
      <main className="my-8 ">
        <p>Welcome to my website. Here is some content.</p>
      </main>
      <footer className="py-6">
        <p>© 2024 My Website</p>
      </footer>
    </Container>
  )
}

export default Event
