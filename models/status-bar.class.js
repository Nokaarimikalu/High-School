class Statusbar extends DrawableObject {
    width = 200;
    height = 60;
    percentage = 100;

    constructor() {
        super();
    }

    resolveImageIndex() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage >= 80) {
            return 4;
        } else if (this.percentage >= 60) {
            return 3;
        } else if (this.percentage >= 40) {
            return 2;
        } else if (this.percentage >= 10) {
            return 1;
        } else {
            return 0;
        }
    }
}
