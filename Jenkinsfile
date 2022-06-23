pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                commitId = sh(returnStdout: true, script: 'git rev-parse HEAD')
                sh 'docker build -t pcdhan/erp-system:${commitId} .'
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
