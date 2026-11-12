pipeline {
    agent any

    stages {
        stage('Hello HCL') {
            steps {
                echo 'Hello HCL Computer Coaching!'
                echo 'Jenkins Pipeline Successfully Running'
            }
        }

        stage('Check Website Files') {
            steps {
                bat 'if not exist index.html exit /b 1'
                bat 'if not exist style.css exit /b 1'
                bat 'if not exist script.js exit /b 1'
                echo 'All HCL website files are present!'
            }
        }

        stage('Check Docker') {
            steps {
                bat '"C:\\Program Files\\Docker\\Docker\\resources\\bin\\docker.exe" version'
            }
        }
    }
}
