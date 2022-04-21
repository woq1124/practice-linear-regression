const getCanvasLib = (width, height) => ({
  /**
     * @param {number} x
     * @param {number} y
     * @returns {[number, number]}
     */
  calculatePoint(x, y) {
    return [x, height - y];
  },
});

/**
 * @param {HTMLCanvasElement} canvas
 */
export function initCanvas(canvas) {
  const ctx = canvas.getContext('2d');
  const { width } = canvas;
  const { height } = canvas;

  const canvasLib = getCanvasLib(width, height);

  const startingPoint = canvasLib.calculatePoint(20, 20);

  ctx.strokeStyle = '#000';

  // Draw X-axis
  ctx.beginPath();
  ctx.moveTo(...canvasLib.calculatePoint(10, 20));
  ctx.lineTo(...canvasLib.calculatePoint(width - 10, 20));
  ctx.stroke();

  // Draw Y-axis
  ctx.beginPath();
  ctx.moveTo(...canvasLib.calculatePoint(20, 10));
  ctx.lineTo(...canvasLib.calculatePoint(20, height - 10));
  ctx.stroke();

  // Draw guidelines
  ctx.setLineDash([4, 4]);
  Array(Math.floor(width / 40)).fill(0).forEach((_, index) => {
    if (!index) {
      return;
    }
    const [x, y] = canvasLib.calculatePoint(20 + 40 * index, 20 + 40 * index);

    console.log(y);

    // Draw Y-axis guideline
    ctx.beginPath();
    ctx.moveTo(x, 10);
    ctx.lineTo(x, height - 10);
    ctx.stroke();

    // // Draw Y-axis guideline
    ctx.beginPath();
    ctx.moveTo(10, y);
    ctx.lineTo(width - 10, y);
    ctx.stroke();
  });
}
