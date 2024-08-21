
import { Component } from '@angular/core';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  categories = [
    { name: 'e-Voucher', expanded: true },
    { name: 'Products', expanded: false },
    { name: 'Evergreen', expanded: false },
    { name: 'Fashion & Retail', expanded: false }
  ];

  results = [
    { name: 'Allen Solly', 
      points: 0, outOfStock: true,
       image: 'https://fakeimg.pl/700x350/001e63/ffffff?text=Allen+Solly&font=noto' 
      },
    { name: 'Peter England',
       points: 2,
        outOfStock: false,
         image: 'https://fakeimg.pl/700x350/105414/d40707?text=Peter+England&font=noto-serif' 
        },
    { name: 'Amazon',
       points: 10,
        outOfStock: false,
         validUntil: '31-12-2024',
          image: 'https://th.bing.com/th/id/OIP.RK640c4lBNE50d5IVmODowHaHa?pid=ImgDet&w=179&h=179&c=7&dpr=1.5'
        },
    { name: 'Cafe Coffee Day',
       points: 5, 
       outOfStock: false,
        image: 'https://th.bing.com/th?id=OIP.zmePjx_eRCOkOvkYKs5uGQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2',
      },
    { name: 'swiggy',
       points: 3,
        outOfStock: false,
         image: 'https://fakeimg.pl/600x400/ff7f30/ffffff?text=Swiggy' 
        }
  ];

  sortedResults = [...this.results]; 
  showSortPopup = false;

  toggleCategory(category: any) {
    category.expanded = !category.expanded;
  }
  toggleSortPopup() {
    this.showSortPopup = !this.showSortPopup;
  }

  sortRewards(order: string) {
    if (order === 'asc') {
      this.sortedResults.sort((a, b) => a.name.localeCompare(b.name));
    } else if (order === 'desc') {
      this.sortedResults.sort((a, b) => b.name.localeCompare(a.name));
    }
    this.showSortPopup = false; // Close the popup after sorting
  }  
}
