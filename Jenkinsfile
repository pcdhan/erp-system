pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                app = docker.build("pcdhan/erp-systeme")
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
