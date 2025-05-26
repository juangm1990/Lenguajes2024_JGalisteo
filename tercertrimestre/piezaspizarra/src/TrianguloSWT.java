import org.eclipse.swt.SWT;
import org.eclipse.swt.events.PaintEvent;
import org.eclipse.swt.events.PaintListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.graphics.GC;
import org.eclipse.swt.graphics.Point;
import org.eclipse.swt.layout.FillLayout;
import org.eclipse.swt.widgets.Canvas;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

public class TrianguloSWT {

    public static void main(String[] args) {
        Display display = new Display();
        Shell shell = new Shell(display);
        shell.setText("Triángulo con SWT");
        shell.setSize(300, 300);
        shell.setLayout(new FillLayout());

        Canvas canvas = new Canvas(shell, SWT.NONE);

        canvas.addPaintListener(new PaintListener() {
            public void paintControl(PaintEvent e) {
                GC gc = e.gc;

                // Coordenadas del triángulo
                int[] puntos = {
                    150, 50,   // Vértice superior
                    100, 200,  // Esquina inferior izquierda
                    200, 200   // Esquina inferior derecha
                };

                // Color de fondo (relleno)
                Color colorRelleno = display.getSystemColor(SWT.COLOR_YELLOW);
                gc.setBackground(colorRelleno);
                gc.fillPolygon(puntos);

                // Color del borde
                Color colorBorde = display.getSystemColor(SWT.COLOR_BLACK);
                gc.setForeground(colorBorde);
                gc.setLineWidth(3);
                gc.drawPolygon(puntos);
            }
        });

        shell.open();
        while (!shell.isDisposed()) {
            if (!display.readAndDispatch()) display.sleep();
        }
        display.dispose();
    }
}