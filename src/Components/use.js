#include <stdio.h>

int main(){
    printf("Prims Algorithm by Sai Kaushik Sadu \n");
    int current, totalvisited, mincost, i, n;
    int weight[6][6] = {{0, 9, 0, 4, 0, 0}, {9, 0, 5, 1, 3, 0}, {0, 5, 0, 0, 3, 8}, {4, 1, 0, 0, 2, 0}, {0, 3, 3, 2, 0, 7}, {0, 0, 8, 0, 7, 0}};
    n = 6;
    int dis[6], vis[6], predec[6];
    for (i = 0; i < n; i++){
        dis[i] = 9999;
        vis[i] = 0;
        predec[i] = 0;
    }
    current = 0;
    dis[current] = 0;
    vis[current] = 1;
    predec[current] = 0;
    totalvisited = 1;
    while (totalvisited != n){
        for (i = 0; i < n; i++){
            if (weight[current][i] != 0)
                if (vis[i] == 0)
                    if (dis[i] > (weight[current][i])){
                        dis[i] = weight[current][i];
                        predec[i] = current;
                    }
        }
        mincost = 9999;
        for (i = 0; i < n; i++){
            if (vis[i] == 0)
                if (dis[i] < mincost){
                    mincost = dis[i];
                    current = i;
                }
        }
        vis[current] = 1;
        totalvisited++;
    }
    mincost = 0;
    for (i = 0; i < n; i++){
        mincost += dis[i];
        printf("\n Node=%d and predecessor is %d and wt is %d current cost is %d", i, predec[i], dis[i], 
        mincost);
    }
    printf(" \n The minimum cost is %d", mincost);
    return 0;
}
