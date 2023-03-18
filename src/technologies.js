const technologies = [
    {
        id: 1,
        title: "AWS S3",
        imgPath: "images/awss3.png",
        description: "Cloud Database - creating a bucket to store media files in the cloud.",
        instructions: [
            "S3 Management Console: https://s3.console.aws.amazon.com/",
            "Create new bucket and set access permissions",
            "Upload objects to store in bucket",
            "Retrieve objects using S3 URLs (ensure permissions)"
        ]
    },
    {
        id: 2,
        title: "Bootstrap",
        imgPath: "images/bootstrap.png",
        description: "Frontend Toolkit - HTML, CSS, JS library for styling websites.",
        instructions: [
            "Bootstrap Docs: https://getbootstrap.com/docs/5.3/getting-started/introduction/",
            "Add JavaScript Script: <script src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js' integrity='sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa' crossorigin='anonymous'></script>",
            "Add JQuery Script: <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>"
        ]
    },
    {
        id: 3,
        title: "Font Awesome",
        imgPath: "images/fontawesome.png",
        description: "Icons Package - free icons library for styling websites.",
        instructions: [
            "Icon Search: https://fontawesome.com/icons",
            "Add FA Script: <script src='https://kit.fontawesome.com/7aa2b56b45.js' crossorigin='anonymous'></script>"
        ]
    },
    {
        id: 4,
        title: "GitHub",
        imgPath: "images/github.png",
        description: "Version Control - setting up a remote repository from a local project.",
        instructions: [
            "GitHub Start: https://docs.github.com/en/get-started/quickstart",
            "Create new repo on GitHub", 
            "cd to project folder", 
            "git init/git clone", 
            "git remote add origin git@github.com:[USERNAME]/[REPO NAME].git", 
            "git add .",
            "git commit -m 'msg'",
            "git push origin master"
        ]
    },
    {
        id: 5,
        title: "Google Fonts",
        imgPath: "images/googlefonts.png",
        description: "Fonts Package - free fonts library for styling websites.",
        instructions: [
            "Fonts Search: https://fonts.google.com/",
            "<link href='https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400&display=swap' rel='stylesheet'>"
        ]
    },
    {
        id: 6,
        title: "Java",
        imgPath: "images/java.png",
        description: "Programming - compiling and running java programs in a source folder.",
        instructions: [ 
            "Java Docs: https://docs.oracle.com/en/java/",
            "cd to src directory", 
            "Compile: javac [ProgamName].java", 
            "Run: java [ProgramName]"
        ]
    },
    {
        id: 7,
        title: "MongoDB",
        imgPath: "images/mongodb.png",
        description: "NoSQL Database - setting up backend object storage and management.",
        instructions: [
            "Homebrew Install: https://mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/",
            "brew services start mongodb-community@6.0 (brew services stop mongodb-community@6.0)",
            "mongosh (in new terminal window)",
            "use [db name]",
            "CRUD Docs: https://mongodb.com/docs/manual/crud/",
            "npm install mongoose",
            "Restart node app.js to check changes"
        ]
    },
    {
        id: 8,
        title: "Atlas",
        imgPath: "images/atlas.png",
        description: "Multi-cloud Database Service - manage MongoDB databases on the cloud.",
        instructions: [
            "MongoDB Atlas Cluster: https://cloud.mongodb.com",
            "Create cluster, add username/password",
            "Allow connections from all IP addresses",
            "Click: Connect -> Connect your application",
            "Change mongoose.connect line to: mongoose.connect('mongodb+srv://[USER]:[PASSWORD]@[CLUSTER]/[DB NAME]');",
            "Hide MongoDB root url, API keys in .env file",
            "npm i dotenv",
            "Add variable to file: MONGODB_ROOT=mongodb+srv://[USER]:[PASSWORD]@[CLUSTER]/[DB NAME]/",
            "Add line to app.js: require('dotenv').config();",
            "Use this line to access variable: process.env.[VARIABLE_NAME in .env file]",
        ]
    },
    {
        id: 9,
        title: "Material UI",
        imgPath: "images/mui.png",
        description: "React UI Tools - frontend tools for React projects.",
        instructions: [
            "MUI Install: https://mui.com/material-ui/getting-started/installation/",
            "npm install @mui/material @emotion/react @emotion/styled",
            "npm install @mui/icons-material"
        ]
    },
    {
        id: 10,
        title: "Node.js",
        imgPath: "images/node.png",
        description: "JavaScript Framework - create a new Node/Express project using npm.",
        instructions: [
            "Node Start: https://nodejs.org/en/docs/guides/getting-started-guide",
            "npm init",
            "npm install express",
            "npm install body-parser",
            "npm install ejs",
            "Add required project files/dirs: app.js, views, public (css, images, sounds, js)",
            "Add process.env.PORT to app.listen line in server",
            "nodemon app.js"
        ]
    },
    {
        id: 11,
        title: "React.js",
        imgPath: "images/react.png",
        description: "Front-end JavaScript Framework - setting up new React project.",
        instructions: [
            "React Start: https://react.dev/learn/start-a-new-react-project",
            "cd to project folder",
            "npx create-react-app [APP-NAME] . ",
            "cd [APP-NAME]",
            "npm start",
            "Optional: delete all extras (everything except public/index.html and src/index.js)",
            "Add to index.html file: <script src='./index.js' type='text.jsx'></script>"
        ]
    },
    {
        id: 12,
        title: "Render",
        imgPath: "images/render.png",
        description: "Cloud Hosting - deploying an application to a hosting server.",
        instructions: [
            "Render Dashboard: https://dashboard.render.com/",
            "Change start command to node app.js for Node application",
            "If using .env file, add file to environment in Render dashboard"
        ]
    }
];

export default technologies;