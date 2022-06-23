pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                def commitId = sh(returnStdout: true, script: "git log -n 1 --pretty=format:'%h'").trim()
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
