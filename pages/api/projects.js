// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const projects = [
  {
    id: 1,
    title: "Test project",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "project_1.png",
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
    image: "project_2.png",
    subImages: []
  },
  {
    id: 3,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_3.png",
    subImages: []
  },
  {
    id: 4,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_4.jpg",
    subImages: []
  },
  {
    id: 5,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_5.png",
    subImages: []
  },
  {
    id: 6,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_6.jpg",
    subImages: []
  },
  {
    id: 7,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_7.png",
    subImages: []
  },
  {
    id: 8,
    title: "Test project",
    description: "Lorem ipsum...",
    image: "project_8.jpg",
    subImages: []
  }
];

export const getProjects = () => {
  return projects;
}

export default (req, res) => {
  res.statusCode = 200;
  res.json(projects);
}
