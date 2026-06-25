package org.example;

import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

public class AAAExampleTest {

    private int number;

    @BeforeEach
    void setUp() {
        number = 10;
        System.out.println("Setup executed");
    }

    @AfterEach
    void tearDown() {
        System.out.println("Teardown executed");
    }

    @Test
    void testAddition() {

        // Arrange
        int a = number;
        int b = 5;

        // Act
        int result = a + b;

        // Assert
        assertEquals(15, result);
    }
}