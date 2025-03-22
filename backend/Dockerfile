# Use official OpenJDK image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /backend

# Copy JAR file (Make sure to build your project first)
COPY target/*.jar backend.jar

# Expose port (same as in `application.properties`)
EXPOSE 8090

# Run the application
CMD ["java", "-jar", "backend.jar"]
