// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const projects = [
  {
    id: 1,
    title: "Test project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://blog.tubikstudio.com/wp-content/uploads/2019/03/bugs_store_webdesign_tubik-1-1024x768.png",
    subImages: [
      "https://s3-img.pixpa.com/com/large/20669/ai3-jmwol8.jpg",
      "https://s3-img.pixpa.com/com/large/20669/ai4-ebd5p8.jpg",
      "https://s3-img.pixpa.com/com/large/20669/signature1-i1agzc.jpg",
      "https://s3-img.pixpa.com/com/large/20669/signature1-i1agzc.jpg",
      "https://s3-img.pixpa.com/com/large/20669/businesscards-mockup1-66qwmz.jpg"
    ]
  },
  {
    id: 2,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://cdn.shopify.com/s/files/1/1095/6418/files/3d_logo_sample_1024x1024.png?v=1588066397",
    subImages: []
  },
  {
    id: 3,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://blog.tubikstudio.com/wp-content/uploads/2019/03/restaurant_app_sign_up_screen_design_tubik-1024x768.png",
    subImages: []
  },
  {
    id: 4,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://www.opstltd.com/wp-content/uploads/2020/05/acfl-1024x768.jpg",
    subImages: []
  },
  {
    id: 5,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://blog.tubikstudio.com/wp-content/uploads/2019/01/business_card-design-ai-designer-1024x768.png",
    subImages: []
  },
  {
    id: 6,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://maxcdn.icons8.com/app/uploads/2019/09/landing-page-illustrations-design-1024x768.jpg",
    subImages: []
  },
  {
    id: 7,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "https://ossmium.com/wp-content/uploads/2018/11/SendX-1600x1200-dribbble-1024x768.png",
    subImages: []
  },
  {
    id: 8,
    image: "https://bjarkidesign.dk/wp-content/uploads/2020/06/1-1024x768.jpg"}
];

export const getProjects = () => {
  return projects;
}

export default (req, res) => {
  res.statusCode = 200;
  res.json(projects);
}
