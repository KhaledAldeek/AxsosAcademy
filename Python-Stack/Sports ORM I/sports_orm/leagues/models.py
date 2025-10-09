from django.db import models

class League(models.Model):
	name = models.CharField(max_length=50)
	sport = models.CharField(max_length=15)
	created_at = models.DateTimeField(auto_now_add=True)
	updated_at = models.DateTimeField(auto_now=True)

class Team(models.Model):
	location = models.CharField(max_length=50)
	team_name = models.CharField(max_length=50)
	league = models.ForeignKey(League, related_name="teams", on_delete = models.CASCADE)

class Player(models.Model):
	first_name = models.CharField(max_length=15)
	last_name = models.CharField(max_length=15)
	curr_team = models.ForeignKey(Team, related_name="curr_players", on_delete = models.CASCADE)
	all_teams = models.ManyToManyField(Team, related_name="all_players")



def get_all_baseBall_leagus():
    return League.objects.filter(sport = "Baseball")

def get_all_women_leagues():
    return League.objects.filter(name__contains="Womens'")

def get_hockeis():
    return League.objects.filter(sport__endswith = "Hockey")

def get_sport_other_than_football():
    return League.objects.exclude(sport = "Football")

def get_all_conference_leagues():
    return League.objects.filter(name__contains="Conference")

def get_all_atlantic_region():
    return League.objects.filter(name__contains = "Atlantic")

def get_all_teams_in_dallas():
    return Team.objects.filter(location="Dallas")

def get_all_raptors_teams():
    return Team.objects.filter(team_name = "Raptors")

def get_all_teams_location_include_city():
    return Team.objects.filter(location__contains = "City")

def get_all_teams_begins_with_T():
    return Team.objects.filter(team_name__startswith = "T")

def get_all_teams_order_alphabetically_by_location():
    return Team.objects.all().order_by("location")

def get_all_teams_order_alphabetically_by_team_name():
    return Team.objects.all().order_by("-team_name")

def get_every_player_with_lastname_Cooper():
    return Player.objects.filter(last_name = "Cooper")

def get_every_player_with_firstname_Joshua():
    return Player.objects.filter(first_name = "Joshua")

# every player with the previous name "Cooper" EXCEPT those with "Joshua" as the first name
def question_15():
    return Player.objects.filter(last_name = "Cooper").exclude(first_name = "Joshua")

def question_16():
    #(Q) Encapsulate filters as objects that can then be combined logically (using `&` and `|`).
	return Player.objects.filter(models.Q(first_name = "Alexander") | models.Q(first_name = "Wyatt"))
