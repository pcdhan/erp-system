pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    COMMITID = sh(returnStdout: true, script: 'git rev-parse HEAD').trim()
                }
                echo 'Building...'
                echo '${COMMITID}'
                sh 'docker build -t pcdhan/erp-system:${COMMITID} .'
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
