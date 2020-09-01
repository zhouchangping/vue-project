/*
 * @Author: zhouzhou
 * @param:
 * @Date: 2019-09-25 16:13:59
 * @Last Modified by: zhouzhou
 * @Last Modified time: 2020-01-07 16:28:37
 */
export default function formatTime (date) {
  let Y = date.getFullYear();
  let M = date.getMonth() + 1;
  M = M < 10 ? "0" + M : M;
  let D = date.getDate();
  D = D < 10 ? "0" + D : D;
  let H = date.getHours();
  H = H < 10 ? "0" + H : H;
  let Mi = date.getMinutes();
  Mi = Mi < 10 ? "0" + Mi : Mi;
  let S = date.getSeconds();
  S = S < 10 ? "0" + S : S;
  return Y + "-" + M + "-" + D + " " + H + ":" + Mi + ":" + S;
}
