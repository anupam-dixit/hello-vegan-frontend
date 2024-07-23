<script setup lang="ts"></script>

<template>
  <div id="layoutSidenav_nav">
    <nav class="sidenav shadow-right sidenav-light">
      <div class="sidenav-menu">
        <div class="nav accordion" id="accordionSidenav">
          <!-- Sidenav Menu Heading (Account)-->
          <!-- * * Note: * * Visible only on and above the sm breakpoint-->
          <div class="sidenav-menu-heading d-sm-none">Account</div>
          <!-- Sidenav Link (Alerts)-->
          <!-- * * Note: * * Visible only on and above the sm breakpoint-->
          <a class="nav-link d-sm-none" href="#!">
            <div class="nav-link-icon"><i class="fa-solid fa-lg fa-bell"></i></div>
            Alerts
            <span class="badge bg-warning-soft text-warning ms-auto">4 New!</span>
          </a>
          <!-- Sidenav Link (Messages)-->
          <!-- * * Note: * * Visible only on and above the sm breakpoint-->
          <a class="nav-link d-sm-none" href="#!">
            <div class="nav-link-icon"><i class="fa-solid fa-lg fa-envelope"></i></div>
            Messages
            <span class="badge bg-success-soft text-success ms-auto">2 New!</span>
          </a>
          <!-- Sidenav Menu Heading (Core)-->
          <div class="sidenav-menu-heading">Core</div>
          <!-- Sidenav Accordion (Dashboard)-->
          <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
            <div class="nav-link-icon"><i class="fa-solid fa-lg fa-chart-line"></i></div>
            Approvals
            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div class="collapse" id="collapseDashboards" data-bs-parent="#accordionSidenav">
            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
              <NuxtLink class="nav-link" to="/panel/approval/veganlog">
                Vegan Log
                <span class="badge bg-primary-soft text-primary ms-auto">Updated</span>
              </NuxtLink>
              <a class="nav-link" href="dashboard-2.html">Multipurpose</a>
              <a class="nav-link" href="dashboard-3.html">Affiliate</a>
            </nav>
          </div>
          <!-- Sidenav Heading (Custom)-->
          <div class="sidenav-menu-heading">Custom</div>
          <!-- Sidenav Accordion (Pages)-->
          <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div class="nav-link-icon"><i class="fa-regular fa-file-lines"></i></div>
            Pages
            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div class="collapse" id="collapsePages" data-bs-parent="#accordionSidenav">
            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
              <!-- Nested Sidenav Accordion (Pages -> Account)-->
              <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                Account
                <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                <nav class="sidenav-menu-nested nav">
                  <a class="nav-link" href="account-profile.html">Profile</a>
                  <a class="nav-link" href="account-billing.html">Billing</a>
                  <a class="nav-link" href="account-security.html">Security</a>
                  <a class="nav-link" href="account-notifications.html">Notifications</a>
                </nav>
              </div>
              <!-- Nested Sidenav Accordion (Pages -> Authentication)-->
              <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                Authentication
                <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="pagesCollapseAuth" data-bs-parent="#accordionSidenavPagesMenu">
                <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesAuth">
                  <!-- Nested Sidenav Accordion (Pages -> Authentication -> Basic)-->
                  <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthBasic" aria-expanded="false" aria-controls="pagesCollapseAuthBasic">
                    Basic
                    <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="pagesCollapseAuthBasic" data-bs-parent="#accordionSidenavPagesAuth">
                    <nav class="sidenav-menu-nested nav">
                      <a class="nav-link" href="auth-login-basic.html">Login</a>
                      <a class="nav-link" href="auth-register-basic.html">Register</a>
                      <a class="nav-link" href="auth-password-basic.html">Forgot Password</a>
                    </nav>
                  </div>
                  <!-- Nested Sidenav Accordion (Pages -> Authentication -> Social)-->
                  <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuthSocial" aria-expanded="false" aria-controls="pagesCollapseAuthSocial">
                    Social
                    <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="pagesCollapseAuthSocial" data-bs-parent="#accordionSidenavPagesAuth">
                    <nav class="sidenav-menu-nested nav">
                      <a class="nav-link" href="auth-login-social.html">Login</a>
                      <a class="nav-link" href="auth-register-social.html">Register</a>
                      <a class="nav-link" href="auth-password-social.html">Forgot Password</a>
                    </nav>
                  </div>
                </nav>
              </div>
              <!-- Nested Sidenav Accordion (Pages -> Error)-->
              <a class="nav-link collapsed" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                Error
                <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" id="pagesCollapseError" data-bs-parent="#accordionSidenavPagesMenu">
                <nav class="sidenav-menu-nested nav">
                  <a class="nav-link" href="error-400.html">400 Error</a>
                  <a class="nav-link" href="error-401.html">401 Error</a>
                  <a class="nav-link" href="error-403.html">403 Error</a>
                  <a class="nav-link" href="error-404-1.html">404 Error 1</a>
                  <a class="nav-link" href="error-404-2.html">404 Error 2</a>
                  <a class="nav-link" href="error-500.html">500 Error</a>
                  <a class="nav-link" href="error-503.html">503 Error</a>
                  <a class="nav-link" href="error-504.html">504 Error</a>
                </nav>
              </div>
              <a class="nav-link" href="pricing.html">Pricing</a>
              <a class="nav-link" href="invoice.html">Invoice</a>
            </nav>
          </div>


          <!-- Sidenav Link (Tables)-->
          <a class="nav-link" href="tables.html">
            <div class="nav-link-icon"><i class="fa-solid fa-lg fa-table"></i></div>
            Tables
          </a>
        </div>
      </div>
      <!-- Sidenav Footer-->
      <div class="sidenav-footer">
        <div class="sidenav-footer-content">
          <div class="sidenav-footer-subtitle">Logged in as:</div>
          <div class="sidenav-footer-title">Valerie Luna</div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped></style>
