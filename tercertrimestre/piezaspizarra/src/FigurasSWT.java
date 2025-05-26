import org.eclipse.swt.SWT;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Canvas;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class FigurasSWT {

    public static void main(String[] args) {
        Display display = new Display();
        Shell shell = new Shell(display);
        shell.setText("Figuras SWT");
        shell.setSize(400, 200);
        shell.setLayout(new FillLayout());

        Canvas canvas = new Canvas(shell, SWT.NONE);

        canvas.addPaintListener(new PaintListener() {
            public void paintControl(PaintEvent e) {
                GC gc = e.gc;

                // === Cuadrado ===
                int x1 = 30;
                int y1 = 30;
                int size = 80;

                Color rellenoCuadrado = display.getSystemColor(SWT.COLOR_GREEN);
                gc.setBackground(rellenoCuadrado);
                gc.fillRectangle(x1, y1, size, size);

                Color bordeNegro = display.getSystemColor(SWT.COLOR_BLACK);
                gc.setForeground(bordeNegro);
                gc.setLineWidth(3);
                gc.drawRectangle(x1, y1, size, size);

                // === Círculo ===
                int x2 = 150;
                int y2 = 30;

                Color rellenoCirculo = display.getSystemColor(SWT.COLOR_RED);
                gc.setBackground(rellenoCirculo);
                gc.fillOval(x2, y2, size, size);

                gc.setForeground(bordeNegro);
                gc.drawOval(x2, y2, size, size);
            }
        });

        shell.open();
        while (!shell.isDisposed()) {
            if (!display.readAndDispatch()) display.sleep();
        }
        display.dispose();
    }
}