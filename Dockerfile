FROM maven:3.5.3-jdk-8 AS build
COPY src /usr/src/app/src
COPY pom.xml /usr/src/app
RUN mvn -f /usr/src/app/pom.xml clean package

#FROM openjdk:8
FROM gcr.io/distroless/java
COPY --from=build /usr/src/app/target/erp-system-0.0.1-SNAPSHOT.jar /usr/app/erp-system-0.0.1-SNAPSHOT.jar
#ADD target/spring-boot-basic-0.0.1-SNAPSHOT.jar spring-boot-basic-0.0.1-SNAPSHOT.jar
EXPOSE 9300 
ENTRYPOINT ["java", "-jar", "/usr/app/erp-system-0.0.1-SNAPSHOT.jar"]