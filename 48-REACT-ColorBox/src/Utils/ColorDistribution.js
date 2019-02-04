export default function colorDistribution(start, end, steps, index) {
  return Math.floor(start + ((end - start) / (steps - 1)) * index);
}
