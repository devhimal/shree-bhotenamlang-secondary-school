import React, { ReactNode } from "react"
import styles from "../../molecules/Team/team.module.scss"

const HeroContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.imageWrapper}>{children}</div>
}

export default HeroContainer
