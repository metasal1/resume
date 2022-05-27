import React from 'react'

export default function Menu() {
  return (
    <div>        <Link href="/">
    <a className="btn-primary">Home</a>
    </Link><Link href="/contact">
    <a className="btn-primary">Contact</a>
    </Link><Link href="/skills">
    <a className="btn-primary">Skills</a>
    </Link><Link href="/projects">
    <a className="btn-primary">Projects</a>
    </Link><Link href="/experience">
    <a className="btn-primary">Experience</a>
    </Link><Link href="/qualifications">
    <a className="btn-primary">Qualifications</a>
    </Link>
</div>
  )
}
