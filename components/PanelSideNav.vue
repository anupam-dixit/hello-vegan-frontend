<script setup lang="ts">
const route=useRoute()
console.log(route.path)
</script>

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
          <a class="nav-link" :class="{'collapsed':!route.path.includes('approval')}" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapseDashboards" aria-expanded="false" aria-controls="collapseDashboards">
            <div class="nav-link-icon"><i class="fa-solid fa-lg fa-chart-line"></i></div>
            Approvals
            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div class="collapse" :class="{'show':route.path.includes('approval')}" id="collapseDashboards" data-bs-parent="#accordionSidenav">
            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPages">
              <NuxtLink class="nav-link" :class="{'active':route.path.includes('approval/veganlog')}" to="/panel/approval/veganlog">
                Vegan Log
                <span class="badge bg-primary-soft text-primary ms-auto">Updated</span>
              </NuxtLink>
              <NuxtLink class="nav-link" :class="{'active':route.path.includes('approval/blog')}" to="/panel/approval/blog">
                Blog
              </NuxtLink>
            </nav>
          </div>
          <!-- Sidenav Heading (Custom)-->
          <div class="sidenav-menu-heading">Modules</div>
          <!-- Sidenav Accordion (Pages)-->
          <a class="nav-link" :class="{'collapsed':!route.path.includes('panel/blog/')}" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
            <div class="nav-link-icon"><i class="fa-regular fa-file-lines"></i></div>
            Blogs
            <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
          </a>
          <div class="collapse" :class="{'show':route.path.includes('panel/blog/category')}" id="collapsePages" data-bs-parent="#accordionSidenav">
            <nav class="sidenav-menu-nested nav accordion" id="accordionSidenavPagesMenu">
              <!-- Nested Sidenav Accordion (Pages -> Account)-->
              <a class="nav-link" :class="{'collapsed':!route.path.includes('panel/blog/')}" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAccount" aria-expanded="false" aria-controls="pagesCollapseAccount">
                Categories
                <div class="sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
              </a>
              <div class="collapse" :class="{'show':route.path.includes('panel/blog/category')}" id="pagesCollapseAccount" data-bs-parent="#accordionSidenavPagesMenu">
                <nav class="sidenav-menu-nested nav">
                  <NuxtLink :class="{'active':route.path.includes('/blog/category/')}" class="nav-link" to="/panel/blog/category/">List</NuxtLink>
                  <NuxtLink class="nav-link" to="/panel/blog/category/create">Create</NuxtLink>
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
