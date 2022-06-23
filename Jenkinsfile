pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                script {
                val = input message : "Continue the pipeline? ${env.GIT_COMMIT}", 
                            parameters: [
                                string(name: 'commitID', description: 'Commit ID', defaultValue: "${env.GIT_COMMIT}"),
                                string(name: 'buildNum', description: 'Build Number', defaultValue: "${env.BUILD_NUMBER}")
                           ]
                env.buildNum = val.buildNum
                env.commitID = val.commitID
                }
                print "Commit ID ${commitID}"
                print "buildNum ${buildNum}"
                sh 'docker build -t pcdhan/erp-system:${buildNum} .'
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
