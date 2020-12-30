import GridItem from '../GridItem';
import styles from './grid.module.scss';

export default function Grid() {
  const items = [
    "https://blog.tubikstudio.com/wp-content/uploads/2019/03/bugs_store_webdesign_tubik-1-1024x768.png",
    "https://cdn.shopify.com/s/files/1/1095/6418/files/3d_logo_sample_1024x1024.png?v=1588066397",
    "https://blog.tubikstudio.com/wp-content/uploads/2019/03/restaurant_app_sign_up_screen_design_tubik-1024x768.png",
    "https://www.opstltd.com/wp-content/uploads/2020/05/acfl-1024x768.jpg",
    "https://blog.tubikstudio.com/wp-content/uploads/2019/01/business_card-design-ai-designer-1024x768.png",
    "https://maxcdn.icons8.com/app/uploads/2019/09/landing-page-illustrations-design-1024x768.jpg",
    "https://ossmium.com/wp-content/uploads/2018/11/SendX-1600x1200-dribbble-1024x768.png",
    "https://bjarkidesign.dk/wp-content/uploads/2020/06/1-1024x768.jpg"
  ];

  return (
    <div className={styles.gridContainer}>
      {items.map(item => (
        <GridItem imageSrc={item} />
      ))}
    </div>
  )
}
