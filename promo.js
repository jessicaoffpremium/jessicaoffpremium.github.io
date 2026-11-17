/* Faixa da promoção vigente — edite só este bloco quando a promoção mudar */
var PROMO = {
  ativo: true,
  titulo: "Premium Friday",
  texto: "+50% EXTRA no site da OFF",
  cupom: "PREMIUM",
  extra: "+10% extra com meu código i184 nas nossas marcas",
  aviso: "Por tempo limitado",
  link: "https://www.offpremium.com.br/?utmi_campaign=i184",
  fim: null /* ex.: "2026-11-30T23:59:00-03:00" para sumir sozinha */
};

(function () {
  if (!PROMO.ativo) return;
  if (PROMO.fim && new Date() > new Date(PROMO.fim)) return;
  var css = "#promoBar{background:#A8242B;color:#fff;font-family:Inter,Manrope,system-ui,sans-serif;text-align:center;padding:10px 16px;line-height:1.35;position:relative;z-index:50}" +
    "#promoBar .pt{font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:13px}" +
    "#promoBar .px{font-size:14px;margin-top:2px}" +
    "#promoBar .pc{display:inline-block;margin:6px 4px 0;border:1.5px dashed rgba(255,255,255,.85);border-radius:6px;padding:3px 10px;font-weight:800;letter-spacing:.12em;cursor:pointer;background:rgba(255,255,255,.08);font-size:13px}" +
    "#promoBar .pl{display:inline-block;margin:6px 4px 0;background:#fff;color:#A8242B;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;text-decoration:none}" +
    "#promoBar .pe{font-size:12px;opacity:.9;margin-top:6px}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
  var b = document.createElement("div"); b.id = "promoBar"; b.setAttribute("role", "region"); b.setAttribute("aria-label", "Promoção vigente");
  b.innerHTML = '<div class="pt">' + PROMO.titulo + '</div>' +
    '<div class="px">' + PROMO.texto + ' com o cupom</div>' +
    '<span class="pc" title="Toque para copiar">' + PROMO.cupom + ' ⧉</span>' +
    '<a class="pl" href="' + PROMO.link + '" target="_blank" rel="noopener">Aproveitar →</a>' +
    '<div class="pe">' + PROMO.extra + ' · ' + PROMO.aviso + '</div>';
  document.body.insertBefore(b, document.body.firstChild);
  var c = b.querySelector(".pc");
  c.addEventListener("click", function () {
    var done = function () { c.textContent = "Cupom copiado ✓"; setTimeout(function () { c.textContent = PROMO.cupom + " ⧉"; }, 2000); };
    if (navigator.clipboard) navigator.clipboard.writeText(PROMO.cupom).then(done, done); else done();
    if (window.fbq) fbq("trackCustom", "CopiouCupom");
  });
})();
