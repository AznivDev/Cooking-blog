public class CarPlates {
    public static void main(String[] args) {
        // Define a car plate number: 12AM345

        char[] plate1 = new char[7];
        plate1[0] = '1'; plate1[1] = '2'; plate1[2] = 'A'; plate1[3] = 'M';
        plate1[4] = '3'; plate1[5] = '4'; plate1[6] = '5';

        System.out.println(plate1);

        char[] plate2 = new char[] { '1', '2', 'A', 'M', '3', '4', '5'};

        System.out.println(plate2);
    }
}
