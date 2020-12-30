import GridItem from '../GridItem';
import styles from './grid.module.scss';

export default function Grid({ projects }) {
  return (
    <div className={styles.gridContainer}>
      {projects.map(project => (
        <GridItem key={project.id} project={project} />
      ))}
    </div>
  )
}
