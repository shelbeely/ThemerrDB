document.getElementById("footer-container").className = "bg-dark py-4 mt-auto"
document.getElementById("footer-container").innerHTML = `
            <div class="container px-5">
                <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                    <div class="col-auto">
                        <div class="small m-0 text-white" id="copyright-text">Copyright &copy; Shelbeely</div>
                    </div>
                    <div class="col-auto">
                        <a class="link-light small" href="privacy">Privacy</a>
                        <span class="text-white mx-1">&middot;</span>
                        <a class="link-light small" href="terms">Terms</a>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col text-center text-white">
                        <small>LizardByte was the original creator and maintained it until 2024</small>
                    </div>
                </div>
            </div>
`

// Update year
let currDate = new Date();
let currYear = currDate.getFullYear();
document.getElementById("copyright-text").textContent = `Copyright \u00A9 Shelbeely ${currYear}`
