pipeline {
    agent any
    stages {
        stage('Build') {
            environmnet {
            // get git commit from Jenkins
            GIT_COMMIT = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
            }
            steps {
                echo 'Building...'
                sh 'docker build -t pcdhan/erp-system:${GIT_COMMIT} .'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying...'
            }
        }
    }
}
