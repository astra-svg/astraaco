    // Data structure with all the catalog items
    const categoryData = {
        'Toga': {
            1: [
                {
                    university: 'TOGA S1, S2 & S3 UNTAR',
                    items: [
                        { major: 'Hukum',
                          image:[ 
                                'https://i.ibb.co.com/M65v8bN/Salinan-1000002430.png',
                                'https://i.ibb.co.com/YPHtgZg/Tak-berjudul37-20240831112803.jpg',
                                'https://i.ibb.co/NF031pj/Toga-S3-Hukum.jpg' 
                             ]
                            },
                        { major: 'Ekonomi',
                          image: [
                             'https://i.ibb.co/dtX72cY/Toga-S1-Ekonomi.jpg',
                             'https://i.ibb.co/dQT5b3t/Toga-S2-Ekonomi.jpg',
                          ]
                        },
                        { major: 'Teknik',
                          image: [
                              'https://i.ibb.co/2ktPWnJ/Toga-S1-Teknik.jpg',
                              'https://i.ibb.co/JpF3ST2/Toga-S2-Teknik.jpg',
                              'https://i.ibb.co/WxTb5RT/Toga-S3-Teknik.jpg'
                          ] 
                         },
                        { major: 'Ilmu Komunikasi',
                          image: [
                            'https://i.ibb.co/6P53wth/Toga-S1-Ilkom.jpg',
                            'https://i.ibb.co/58mMjC9/Toga-S2-Ilkom.jpg',
                            'https://i.ibb.co/mhjMmQJ/Toga-S3-Ilkom.jpg'
                          ] 
                         },
                        { major: 'Kedokteran', 
                          image: [
                            'https://i.ibb.co/ctjBc0f/Toga-S1-Kedokteran.jpg',
                            'https://i.ibb.co/pKR3Fd1/Toga-S2-Kedokteran.jpg'
                          ] 
                         },
                        { major: 'Psikologi',
                          image: [
                            'https://i.ibb.co/z2wSDm4/Toga-S1-Psikologi.jpg',
                            'https://i.ibb.co/02cj2vd/Toga-S2-Psikologi.jpg'
                          ]
                         },
                        { major: 'Desaign', image: 'https://i.ibb.co/r2J6925/Toga-S1-Design.jpg' },
                        { major: 'Teknologi Informasi', image: 'https://i.ibb.co/dmxZNkx/Toga-S1-Teknologi-informasi.jpg' }
                    ]
                },
                {
                    university: 'UPH',
                    items: [
                        { major: 'Toga Mahsiswa UPH', image: 'https://i.ibb.co.com/CM6D9s6/Tak-berjudul118-20241018103008-1.jpg' }
                    ]
                },
                {
                    university: 'UIII',
                    items: [
                        {major: 'Toga Mahasiswa UIII', image: 'https://i.ibb.co.com/BNT0qYN/toga-mahsiswa-UIII.jpg'}
                    ]
                },
                
                {
                    university: 'Ipeka',
                    items: [
                        {major: 'Toga SMA IPEKA', image: 'https://i.ibb.co.com/VmGvky9/toga-ipeka-sma.jpg'},
                        {major: 'Toga SMP IPEKA', image: 'https://i.ibb.co.com/2tgTSc4/toga-smp-ipeka.jpg'},
                        
                        {major: 'Toga TK IPEKA', image: 'https://i.ibb.co.com/yV1rh1F/toga-ipeka-tk.jpg'},
                        {major: 'Toga IPEKA ARROWSTAR', image: 'https://i.ibb.co.com/pQqHjVM/toga-ipeka-arrowstar.jpg'}
                    ]
                }
            ],
            2: [
                {
                    university: 'TOGA PEMIMPIN UNTAR',
                    items: [
                        { major: 'Rektor', image: 'https://i.ibb.co/VBxgDZq/Toga-pimpinan-Rektor.jpg' },
                        { major: 'Psikologi', image: 'https://i.ibb.co/vBXcjsP/Toga-Pimpina-Psikologi.jpg'},
                        { major: 'Desaign', image: 'https://i.ibb.co/47nTBrg/Toga-Pimpinan-Desaign.jpg' },
                        { major: 'PPS', image: 'https://i.ibb.co/SKDC1S2/Toga-Pimpinan-PPS.jpg' },
                        { major: 'Kedokteran', image:'https://i.ibb.co/MRJR7PV/Toga-pimpinan-Kedokteran.jpg' },
                        { major: 'Ilmu Komunikasi', image: 'https://i.ibb.co/kDpKcV7/Toga-Pimpinan-Ilkom.jpg' },
                        { major: 'Hukum', image: 'https://i.ibb.co/gWkZrTx/Toga-Pimpin-Ilkom.jpg' },
                        { major: 'Ekonomi', image: 'https://i.ibb.co/8mLcVkN/Toga-Pimpinan-Ekonomi.jpg' },
                        { major: 'Teknik', image: 'https://i.ibb.co/YNB8769/Toga-Pimpinan-Teknik.jpg' }
                    ]
                },
                {
                    university: 'TOGA PEMPIMPIN UII',
                    items: [
                        {major: 'Toga Pempimpin', image: 'https://i.ibb.co.com/F8mkQv5/toga-pimpinan-UIII.jpg'}
                    ]
                },
                {
                    university: 'TOGA PDMPIMPIN UPH',
                    items: [
                        {major: 'Toga Pempimpin', image: 'https://i.ibb.co.com/Jc93QKf/Tak-berjudul117-20241008112106.jpg'}
                    ]
                },
                {
                    university: 'TOGA PEMPIMPAN PODOMORO',
                    items: [
                        {major: 'Toga Pempimpin', image:'https://i.ibb.co.com/tcLQP66/toga-pimpinan-podomoro.jpg'}
                    ]
                }
            ],
            3: [
                {
                    university: 'Podomoro',
                    items: [
                        {major: 'Toga Mahasiswa Podomoro', image: 'https://i.ibb.co.com/1vptKyF/toga-podomoro.jpg'}
                    ]
                },
                {
                    university: 'Bakrie',
                    items: [
                        { major: 'Ilmu Komunikasi', image: 'https://i.ibb.co.com/T4KHd4g/bakrie-s2-ilkom.jpg'},
                        { major: 'Ekonomi', image: 'https://i.ibb.co.com/rs5BR0M/toga-s2-bakrie-ekonomi.jpg'}
                    ]
                },
                {
                    university: 'Jis',
                    items: [
                        { major :'Toga SMA JIS', image: 'https://i.ibb.co.com/zspytD8/toga-jis-sma.jpg'}
                    ]
                },
               
            ]
            
        },
        'Almamater': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Jas Almamater UNTAR', image: 'https://i.ibb.co/W2ymSKT/jas.jpg' }
                    ]
                },
                {
                    university: 'Podomoro',
                    items: [
                        { major: 'Jas Alamamter Podomoro', image: 'https://i.ibb.co.com/K2Rb6my/Tak-berjudul110-20240730112721.jpg'}
                    ]
                },
                {
                    university: 'Uniasman',
                    items: [
                        { major: ' Jas Alamamter Uniasman', image: 'https://i.ibb.co.com/j32B58b/Tak-berjudul120.jpg'}
                    ]
                }
            ]
        },
        'Selempang': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Selempang', image: 'https://i.ibb.co/DCcCVF4/selempang.jpg' },
                    ]
                },
                {
                    university: 'PODOMORO',
                    items: [
                        { major: 'Selempang Pimpinan', image: 'https://i.ibb.co.com/WkC5WSf/slempang-pimpinan-podomoro.jpg'}
                    ]
                },
            ]
        },
        'Tas': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Totebag', image: 'https://i.ibb.co/68dMrBc/tas-tas.jpg' },
                        { major: 'Ransel', image: 'https://i.ibb.co/QXn7q3c/tas.jpg' },
                    ]
                }
            ]
        },
        'Kaos/PDH': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Polo', image: 'https://i.ibb.co/68dMrBc/tas-tas.jpg' },
                        { major: 'Kaos', image: 'https://i.ibb.co/QXn7q3c/tas.jpg' },
                        { major: 'PDH', image: 'https://i.ibb.co.com/gSDZFB9/Whats-App-Image-2024-11-01-at-14-21-18-f9ea239e.jpg'}
                    ]
                }
            ]
        },
        'Bendera pataka fakultas': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Psikologi', image: 'https://i.ibb.co/dcZNSYS/bendera-psikologi.jpg' },
                        { major: 'Ekonomi', image: 'https://i.ibb.co/H71bHqq/bendera-ekonomi.jpg' },
                        { major: 'Ilkom', image: 'https://i.ibb.co/0ZtT5cv/bendera-ilokm.jpg' },
                        { major: 'Kedokteran', image: 'https://i.ibb.co/bQpNMZF/bendera-kedokteran.jpg' },
                        { major: 'Design', image: 'https://i.ibb.co/rQvCFQz/bendera-senirupa.jpg' },
                        { major: 'Hukum', image: 'https://i.ibb.co.com/q5hvrPk/Tak-berjudul103-20241004095305.jpg'},
                        { major: 'Teknik', image: 'https://i.ibb.co.com/nLBcPjD/Tak-berjudul103-20241004101018.jpg'}
                    ]
                }
            ]
        },
        'Tabung': {
            1: [
                {
                    university: 'UNTAR',
                    items: [
                        { major: 'Tabung', image: 'https://i.ibb.co/h983TqZ/tabung.jpg' }
                    ]
                }
            ]
        },
        'Topi Toga': {
            1: [
                {
                   items: [
                    { major: 'Topi Toga Pimpinan', image: 'https://i.ibb.co.com/J2jNLvH/Tak-berjudul60-20240921145221.jpg'}
                   ] 
                }
            ]
        },
        'Batik': {
            1: [
                {
                    items: [
                        { major: 'Batik ', 
                            image: ['https://i.ibb.co.com/pQYcJ5y/Tak-berjudul34-20240831094457.jpg', 
                                    'https://i.ibb.co.com/J2WGxdh/Tak-berjudul51-20240903102523.jpg', 
                                    'https://i.ibb.co.com/X7kP3Mh/Tak-berjudul50-20241004152723.jpg',
                                    'https://i.ibb.co.com/cXVVGsQ/Tak-berjudul110-20241005105716.jpg' 
                            ]
                        }
                    ]

                }
            ]
        },
        'HOOD': {
            1: [
                {
                    items: [
                        { major: 'HOOD',
                            image: [
                                ' https://i.ibb.co.com/P6XvhQz/Tak-berjudul75-20240727094415.jpg',
                                ' https://i.ibb.co.com/bWRNJn4/Tak-berjudul75-20240727110329.jpg'

                            ]
                        }
                    ]

                }
            ]
        }
    };

    
            let currentCategory = 'Toga';
            let currentPage = 1;
            let currentImageIndex = 0;
            let currentImages = null;
    
            // Initialize the page
            function initializePage() {
                setupCategories();
                updatePagination();
                renderContent();
            }
    
            // Setup category buttons
            function setupCategories() {
                const categoriesDiv = document.getElementById('categories');
                Object.keys(categoryData).forEach(category => {
                    const button = document.createElement('button');
                    button.className = `category-btn ${category === currentCategory ? 'active' : ''}`;
                    button.textContent = category;
                    button.onclick = () => changeCategory(category);
                    categoriesDiv.appendChild(button);
                });
            }
    
            // Change category
            function changeCategory(category) {
                currentCategory = category;
                currentPage = 1;
                currentImageIndex = 0;
                currentImages = null;
                
                // Update UI
                updateCategoryButtons();
                updatePagination();
                renderContent();
                clearImageContainer();
            }
    
            // Update category buttons
            function updateCategoryButtons() {
                document.querySelectorAll('.category-btn').forEach(btn => {
                    btn.classList.toggle('active', btn.textContent === currentCategory);
                });
            }
    
            // Update pagination
            function updatePagination() {
                const paginationDiv = document.getElementById('pagination');
                paginationDiv.innerHTML = '';
                
                const pageCount = Object.keys(categoryData[currentCategory]).length;
                if (pageCount > 1) {
                    for (let i = 1; i <= pageCount; i++) {
                        const button = document.createElement('button');
                        button.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
                        button.textContent = i;
                        button.onclick = () => changePage(i);
                        paginationDiv.appendChild(button);
                    }
                }
            }
    
            // Change page
            function changePage(page) {
                currentPage = page;
                currentImageIndex = 0;
                currentImages = null;
                
                // Update UI
                document.querySelectorAll('.pagination-btn').forEach(btn => {
                    btn.classList.toggle('active', parseInt(btn.textContent) === page);
                });
                renderContent();
                clearImageContainer();
            }
    
            // Render content
            function renderContent() {
                const contentDiv = document.getElementById('content');
                contentDiv.innerHTML = '';
    
                const categoryItems = categoryData[currentCategory][currentPage];
                if (categoryItems) {
                    categoryItems.forEach(university => {
                        const section = document.createElement('div');
                        section.className = 'university-section';
    
                        const heading = document.createElement('h2');
                        heading.textContent = university.university;
                        section.appendChild(heading);
    
                        const itemsContainer = document.createElement('div');
                        itemsContainer.className = 'items-container';
    
                        university.items.forEach(item => {
                            const button = document.createElement('button');
                            button.className = 'major-button';
                            button.textContent = item.major;
                            button.onclick = () => showImage(item.image);
                            itemsContainer.appendChild(button);
                        });
    
                        section.appendChild(itemsContainer);
                        contentDiv.appendChild(section);
                    });
                }
            }
    
            // Show image
            function showImage(image) {
                const imageContainer = document.getElementById('image-container');
                imageContainer.innerHTML = '';
    
                currentImages = Array.isArray(image) ? image : [image];
                currentImageIndex = 0;
    
                // Create image element
                const img = document.createElement('img');
                img.id = 'selected-image';
                img.src = currentImages[currentImageIndex];
                imageContainer.appendChild(img);
    
                // Add navigation if multiple images
                if (currentImages.length > 1) {
                    const nav = document.createElement('div');
                    nav.className = 'image-navigation';
    
                    const prevButton = document.createElement('button');
                    prevButton.className = 'nav-button';
                    prevButton.textContent = 'Previous';
                    prevButton.onclick = showPreviousImage;
                    prevButton.disabled = currentImageIndex === 0;
    
                    const nextButton = document.createElement('button');
                    nextButton.className = 'nav-button';
                    nextButton.textContent = 'Next';
                    nextButton.onclick = showNextImage;
                    nextButton.disabled = currentImageIndex === currentImages.length - 1;
    
                    nav.appendChild(prevButton);
                    nav.appendChild(nextButton);
                    imageContainer.appendChild(nav);
                }
            }
    
            // Show previous image
            function showPreviousImage() {
                if (currentImageIndex > 0) {
                    currentImageIndex--;
                    updateImageDisplay();
                }
            }
    
            // Show next image
            function showNextImage() {
                if (currentImageIndex < currentImages.length - 1) {
                    currentImageIndex++;
                    updateImageDisplay();
                }
            }
    
            // Update image display
            function updateImageDisplay() {
                const img = document.getElementById('selected-image');
                img.src = currentImages[currentImageIndex];
    
                const [prevButton, nextButton] = document.querySelectorAll('.nav-button');
                if (prevButton && nextButton) {
                    prevButton.disabled = currentImageIndex === 0;
                    nextButton.disabled = currentImageIndex === currentImages.length - 1;
                }
            }
    
            // Clear image container
            function clearImageContainer() {
                const imageContainer = document.getElementById('image-container');
                imageContainer.innerHTML = '';
            }
    
            // Initialize the page when DOM is loaded
            document.addEventListener('DOMContentLoaded', initializePage);
            
        // Initialize with default content
        renderContent();
        document.addEventListener('DOMContentLoaded', function () {
            const navToggle = document.querySelector('.nav-toggle');
            const navMenu = document.querySelector('.nav-menu');
        
            // Toggle the navigation menu on click of the hamburger icon
            navToggle.addEventListener('click', function () {
                navMenu.classList.toggle('active');
            });
        
            // Close dropdown menus if clicked outside
            document.addEventListener('click', function (event) {
                if (!event.target.closest('.nav-menu') && !event.target.closest('.nav-toggle')) {
                    navMenu.classList.remove('active');
                }
            });
        
            // Toggle dropdown submenu on hover
            const dropdown = document.querySelector('li:has(.dropdown-menu)');
            dropdown.addEventListener('mouseover', function () {
                this.querySelector('.dropdown-menu').classList.add('show');
            });
            dropdown.addEventListener('mouseleave', function () {
                this.querySelector('.dropdown-menu').classList.remove('show');
            });
        });