package com.company;

import java.util.Scanner;

public class Console {
    private static Scanner scanner = new Scanner(System.in);

    public static String readString(String prompt) {
        System.out.println(prompt);
        return  scanner.nextLine();
    }

    public static double readNumber( String prompt, double min, double max ) {
        double value;
        while (true) {
            System.out.println(prompt);
            value = scanner.nextDouble();
            if (value >= min && value <= max)
                break;
            System.out.println("Enter a value between " + min + " to " + max);
        }
        return value;
    }
}


