export default function api(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(callback()), 500);
  });
}
