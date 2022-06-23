pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    COMMITID = sh(script: "git log -n 1 --pretty=format:'%H'", returnStdout: true)
                }
                echo 'Building...'
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
